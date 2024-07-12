import React from "react";


export function BindingArray()
{
  var topics = [
    {Title: "HTML", Description: "It is a markup language."},
    {Title: "CSS", Description: "It configure styles for HTML."}
];

return(
   <>
     <dl>
        {
           topics.map(topic=>
                 <React.Fragment key={topic.Title} >
                 <dt key={topic.Title}>{topic.Title}</dt>
                 <dd key={topic.Description}>{topic.Description}</dd>
                 </React.Fragment>
               )
        }
     </dl>
   </>
)
}

