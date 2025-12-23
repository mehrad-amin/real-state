import styles from "@/components/module/Sidebar.module.css";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      <Link
        href={{ pathname: "/buy-residential", query: { category: "villa" } }}
      >
        ویلا
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "apartment" },
        }}
      >
        آپارتمان
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "office" },
        }}
      >
        دفتر
      </Link>
      <Link
        href={{
          pathname: "/buy-residential",
          query: { category: "store" },
        }}
      >
        مغازه
      </Link>
    </div>
  );
};

export default Sidebar;
