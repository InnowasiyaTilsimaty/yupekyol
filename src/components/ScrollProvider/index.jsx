import { PageProvider } from "../ScrollContext";

export default function PageWrapper({ children }) {
  return <PageProvider>{children}</PageProvider>;
}
