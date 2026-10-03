const users =[
    {id:1,name:'Priyanka G',phone:'071067',city:'Bengaluru'},
    {id:2,name:'Sanjana',phone:'086081',city:'Bengaluru'},
    {id:3,name:'Shirisha TS',phone:'088083',city:'Bengaluru'},
    {id:4,name:'Srisha T',phone:'096090',city:'Bengaluru'},
]

export const getallusers=(req,res)=>{
    res.json(users);
}

export const getuserbyid=(req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    let u1 = users.find((u)=>u.id===id);
    if(u1)
        res.json(u1);
    else res.json({message:"No user Present"})
}

/*export const getuserbycity=(req,res)=>{
    let {city} = req.params;
    let c1 = users
                .filter((u)=>u.city===city)
                .map(u=>({id: u.id, name: u.name}));
    //let u = c1.map((id,name)=>(id=c1.id,name=c1.name));
    if(c1){
        //let u = c1.map((id,name)=>(id=u.id,name=u.name));
        res.json(c1);
    }    
    else res.json({message:"No user found"});
    //res.json(arr);
}*/

export const getuserbycity=(req,res)=>{
    let {city} = req.params;
    let usr=users.filter((u)=>u.city===city);
    if(usr)
        res.json(usr);
    else
        res.json(message,'No data found');
}
/*export const postUser=(req,res)=>{
    const user = req.body;
    users.push(user);

    res.status(201).json({
        message:"User added Successfully",
        user:user
    })
}*/
export const postUser=(req,res)=>{
    const u1 = req.body;
    users.push(u1);
    res.json(u1);
}