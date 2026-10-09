const service = [{}];

export const createService=(req,res)=>{
    const s1 = req.body;
    service.push(s1);
    res.json(s1);
}

export const updateService=(req,res)=>{
    const id = parseInt(req.params.id);
    const s = service.find(s=>s.id===id);
    if(s){
        s.service_name = req.body.service_name;
        s.service_cost = req.body.service_cost;
        s.service_rating = req.body.service_rating;
        res.json(service)
    }
}