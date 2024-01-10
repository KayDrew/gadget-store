export default function appRoutes(){



    async function home(req,res){

        let popularProducts=[{productName:"Samsung Headset Max Bass XR",
    price:"R2799.00"}];

        res.render("index",{popularProducts

        });

    }

    return{

        home,
    }

}