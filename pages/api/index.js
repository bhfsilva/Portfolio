const { Client } = require('@notionhq/client');

const notion = new Client({auth:process.env.NOTION_KEY});

export default async (req,res) => {
  const resp = await notion.blocks.children.append({
    block_id:"69c02b393ca0440baab59b9aa49ab297",
    children:[{
      "type":"callout",
      "callout":{
        "rich_text":[{
          "text": {
            "content":`${req.body.author} | ${req.body.contact}`,
            "link": null
          },
          "annotations": {
            "bold": true
          }
        }],
        "icon":{
          "emoji":"💬"
        },
        "children":[{
          "bulleted_list_item":{
            "rich_text":[{
              "text":{
                "content":`${req.body.comment}`,
                "link": null
              }
            }]
          }
        }]
      }
    }]
  })
}