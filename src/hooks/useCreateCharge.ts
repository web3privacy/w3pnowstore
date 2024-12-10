import { useCallback } from 'react';
import { COINBASE_COMMERCE_API_KEY } from 'src/config';
import { COMMERCE_API_URL } from 'src/links';

type Price = {
  amount: string;
  currency: string;
};
export type ChargeDetails = {
  name?: string;
  description?: string;
  pricing_type?: string;
  local_price?: Price;
};

const useCreateCharge = () => {
  const createCharge = useCallback(async (chargeDetails: ChargeDetails) => {
    console.log('=== CreateCharge Debug ===');
    console.log({
      hasCommerceKey: !!COINBASE_COMMERCE_API_KEY,
      commerceKeyLength: COINBASE_COMMERCE_API_KEY?.length,
      chargeDetails,
    });

    if (!COINBASE_COMMERCE_API_KEY) {
      console.error('Commerce API Key is missing or empty');
      throw new Error('Missing Coinbase Commerce API key');
    }

    try {
      const res = await fetch(`${COMMERCE_API_URL}/charges`, {
        method: 'POST',
        body: JSON.stringify(chargeDetails),
        headers: {
          'Content-Type': 'application/json',
          'X-CC-Api-Key': COINBASE_COMMERCE_API_KEY,
        },
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('API Error:', {
          status: res.status,
          statusText: res.statusText,
          errorText,
        });
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const { data } = await res.json();
      return data.id;
    } catch (error) {
      console.error('Detailed error in createCharge:', error);
      throw error;
    }
  }, []);

  return { createCharge };
};

export default useCreateCharge;
