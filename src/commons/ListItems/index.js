import styles from './ListItems.module.css';
import { useState } from 'react';

export default function ListItems({source, clickable}) {
  
  const TagName = clickable?'a':'div';
  const isLink = TagName=='a';

  const linkProps = {target:"_blank", rel:"noreferrer"} 

  const [activeGrid, setActive] = useState(false);

  const listSize = source.length;

  const [playGif, setPlayGif] = useState(null);

  return (
    <div className={styles.mainBox}>  
      <button className={styles.listViewButton} onClick={() => setActive(!activeGrid)}>
        {activeGrid?<img src="/assets/img/projects/list.svg"/>:<img src="/assets/img/projects/grid.svg"/>}
      </button>
      {listSize
        ?source.map((item,index) => (
          <div key={item.title} className={listSize%2 && listSize - index == 1 ?`${styles.lastItem}`:''}>
            <TagName
              className={activeGrid?`${styles.gridBox}`:`${styles.listBox}`}
              href={isLink?`${item.url}`:undefined}
              {...isLink && {...linkProps}}
              onMouseEnter={() => setPlayGif(index)}
              onMouseLeave={() => setPlayGif(null)}
            >
              {isLink && playGif === index?
                <img src={item.gif} alt={item.title}/>:
                <img src={item.image} alt={item.title}/>
              }
              <div className={styles.content}>
                <div className={styles.acessTag}>
                  <img src="/assets/img/projects/link.svg"/>
                </div>
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
