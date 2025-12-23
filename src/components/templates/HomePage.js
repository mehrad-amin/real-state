import styles from "@/components/templates/HomePage.module.css";
import { FiCircle } from "react-icons/fi";
import CategoryCard from "../module/CategoryCard";
import { FaCity } from "react-icons/fa";
const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمان",
    "شیراز",
    "مشهد",
    "اصفهان",
    "کرمانشاه",
    "اهواز",
  ];
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i, index) => (
              <li key={index}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>
      <div className={styles.city}>
        <h3>شهرهای پربازدید</h3>
        <ul>
          {cities.map((i, index) => (
            <li key={index}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
