export default function appRoutes(){



    async function home(req,res){

        res.render("index");

    }

    return{

        home,
    }

}