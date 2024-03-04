import TopicsList from "@/components/TopicsList";

export default async function Home() {
  
  const getList = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache:'no-store'
    })
    
    if (!res.ok)
    {
      throw new Error('Failed to fetch topics');
    }
    const List = await res.json();
    
    return List;
    
  } catch (error) {
    console.log(error.message)
  }  
  }
  

  
  
  const {List} = await getList()
  
  return (
    <div className="py-2"> 
    <TopicsList List={List}/>
    </div>

  );
}
