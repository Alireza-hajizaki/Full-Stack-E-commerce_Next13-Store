import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0 ; 

const HomePage = async () => {

    const billboard = await getBillboard("8b752ddf-a359-484f-8419-8d82a9d3b796");

    return ( 
       <Container>
        <div className="space-y-10 pb-10">  
          <Billboard data={billboard} />
        </div>
       </Container>
     );
}
 
export default HomePage;