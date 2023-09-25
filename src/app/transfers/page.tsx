import { TransfersList } from "./transfers-list";
import { TransfersHeader } from "./transfers-header";

export const revalidate = 0;

const TransfersPage = async () => {
  return (
    <main>
      <TransfersHeader />
      <TransfersList serverTransfers={[]} />
    </main>
  );
};

export default TransfersPage;
