import styles from './ListItems.module.css';

export default function ListItems({source}) {
  return (
    <div className={styles.mainBox}>
      {source.map(item => (
        <button key={item.title} className={styles.listBox}>
          <img src={item.image} alt={`${item.title} icon`}/>
          <div className={styles.content}>
            <h2>{item.title}</h2>
            {item.desc.length == 1
              ?<p>{item.desc}</p>
              :<div className={styles.skillsBox}>
                {item.desc.map(desc => (
                  <div key={desc.title}>
                    <img src={desc.image}/>
                    <h2>{desc.title}</h2>
                  </div>
                ))}
              </div>}
          </div>
        </button>
      ))}
    </div>
  )
}
