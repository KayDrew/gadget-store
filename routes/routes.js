export default function appRoutes(){



    async function home(req,res){

        let popularProducts=[{productName:"Samsung Headset Max Bass XR",
    price:"R2799.00",image:"/samsung/samsung1.png",rating:"4.8"}];

    

        res.render("index",{popularProducts

        });

    }

    return{

        home,
    }

}