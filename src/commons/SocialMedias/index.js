import styles from './SocialMedias.module.css';
export default function SocialMedias({contactSize}) {
  let info = [
    {
      "socialMedia":"GitHub",
      "username":"bhfsilva",
      "img":"/assets/img/intro/github.svg",
      "link":"https://github.com/bhfsilva?tab=repositories"
    },
    {
      "socialMedia":"Email",
      "username":"bhfs.contato@gmail.com",
      "img":"/assets/img/intro/mail.svg",
      "link":"mailto:bhfs.contato@gmail.com"
    },
    {
      "socialMedia":"Linkedin",
      "username":"Bruno Henrique",
      "img":"/assets/img/intro/linkedin.svg",
      "link":"https://www.linkedin.com/in/bhS1lva/"
    }
  ]
  
  const styleType = contactSize?[styles.contactContentBox, styles.contactSocialMedia]:[styles.contentBox, styles.socialMedia];

  return (
    <div className={styleType[0]}>
      {info.map(info => (
        <a className={styleType[1]} key={info.socialMedia} href={info.link} target="_blank" rel="noreferrer">
          <img src={info.img} alt={`${info.socialMedia} icon`}/>
          <div>
            <h1>{info.socialMedia}</h1>
            <p>{info.username}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
