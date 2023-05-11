import styles from './ListItems.module.css';

export default function ListItems({source, clickable}) {
  
  const TagName = clickable?'a':'div';
  const isLink = TagName=='a';

  const linkProps = {target:"_blank", rel:"noreferrer"} 

  return (
    <div className={styles.mainBox}>     
      {source.length
      ?source.map(item => (
        <div className={styles.element} key={item.title}>
          <TagName className={styles.listBox} href={isLink?`${item.url}`:undefined} {...isLink && {...linkProps}}>
            <img src={item.image} alt={`${item.title} icon`}/>
            <div className={styles.content}>
              <button>
                Acesse
                <img src="assets/img/projects/link.svg"/>
              </button>
              <h2>{item.title}</h2>
              {isLink
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
          </TagName>
        </div>
      ))
      :<h1 className={styles.errorMessage}>{'Nenhum item encontrado'}</h1>}
    </div>
  )
}
