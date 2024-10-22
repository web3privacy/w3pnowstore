import Image from 'next/image';
import CommerceScreenImage from '../images/commerceScreen.png';
import { OnchainStoreModalReact } from 'src/types';
import { GITHUB_LINK } from 'src/links';
import { CloseSvg } from 'src/svg/CloseSvg';

export default function OnchainStoreModal({
  closeModal,
}: OnchainStoreModalReact) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="z-10 bg-[white] flex flex-col rounded-[10px] p-6 px-10 gap-2 relative max-w-lg">
        <button
          type="button"
          className="absolute top-2 right-4"
          onClick={closeModal}
        >
          <CloseSvg />
        </button>
        <div className="flex flex-col pt-4 pb-4 gap-2 items-start">
          <div className="font-bold">Try it locally</div>
          <span className="text-sm ">
            <a href={GITHUB_LINK} className="ock-text-primary">
              Fork the template and experience the end-to-end checkout flow.{' '}
            </a>
            Your users will see the below screen when the payment flow is
            active.
          </span>
          <div className="flex grow justify-center py-4 mx-auto">
            <Image
              src={CommerceScreenImage}
              alt="123"
              className="mx-auto h-[400px] w-auto rounded-[10px]"
            />
          </div>
          <div className="text-xs ock-text-foreground-muted ">
            These products are not for sale. We have disabled the end-to-end
            checkout flow on production.
          </div>
        </div>
      </div>
    </div>
  );
}
