import EditList from "@/components/EditList";


const getTopicById = async (id) => {
  try {
    
    let res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache:'no-store'
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch');
    } 
    
    return res.json();
  } catch (error) {
    console.log(error.message)
  }
}

export default async function EditTopic({ params }) {
  let { id } = params;
  
  const selectedTopics = await getTopicById(id);

  const { _id, title, description ,date} = selectedTopics.selectedTopic;
   
  return (
    <EditList id={_id} title={title} description={description} date={date}/>
  )
}