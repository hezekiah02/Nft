import styles from "../style";

const RoadMap = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} h-screen text-center`}>
    <div className="w-full justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Road Map
      </h2>
      <div className="w-full">
        <p className={`${styles.paragraph} text-center  justify-center md:px-20`}>
            Road Map Content
        </p>
      </div>
    </div>
  </section>
  )
}

export default RoadMap;