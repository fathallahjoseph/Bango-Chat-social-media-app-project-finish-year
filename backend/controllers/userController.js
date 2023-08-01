const User=require('../models/user_model')//Import User
const bcrypt=require("bcryptjs")//Bcrypt To change Password
const jwt=require('jsonwebtoken')//Import To Make Tokken

//All Functions Backend

//Fuction To Create a Compte
const signup=(req,res)=>{
const data={
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    bio: req.body.bio,
    picture:req.body.picture,
    birthdate : req.body.birthdate
        }
        // const  existure= async()=> await User.finOne({email:email})
        // if(existure){
        //     res.status(400).json(msg:"this email checked")
        // }

        const _user = new User(data);
        
_user.save().then((createduser)=>{
    res.status(200).json({mes:'User added successfully!!'})
}).catch(
    (err)=>{
     res.status(400).json({mes:'problem while adding the user!x! '})
    }
)

}

//Function To Login or Signin

const signin=async(req,res) => {
    const {email,password}=req.body;
    const user = await User.findOne({email : email})
    if( !user ){
        return res.status(400).json({mes:'Email invalid'})
    }
    bcrypt.compare( password , user.password ).then(
        (isMatch)=>{
            if(isMatch == false){ // False 
                return res.status(400).json({mes:"Password Invalid..." })
        }else{//true 
            //gen token
         const token=jwt.sign({ 
            data : {id : user._id , role : user.role
            }},
            process.env.CLE,
            {expiresIn:'1h'}
            )  
             return res.status(200)
            .json({mes:" success ...",
            token:token,
        user:user
         })
    }
}
    )
}


//Function to Search in db
const Search=async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  };
  //Function to deleteuser from db

  const deleteuser=async (req, res) => {
    try {
      const deleteduser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({msg:"User deleted successfully",deleteduser:deleteduser});
    } catch (error) {
      res.status(500).json({ message: 'User dont find in db ',error:error });
    }
  };
  //Function To Update Usersname
  const updateusername=async (req, res) => {
    try {
      const updatename = await User.findByIdAndUpdate(req.params.id,{...req.body});
      res.status(200).json({msg:"Username updated successfully",updatename:updatename});
    } catch (error) {
      res.status(500).json({ message: 'UserName don t Change',error:error });
    }
  };
    //Function To Update UserPassword
  const updateuserpassword=async (req, res) => {
    try {
      const {password}=req.body
      const hashPw = await bcrypt.hash(password,11)
      const updatepassword = await User.findByIdAndUpdate(req.params.id,{password:hashPw});
      res.status(200).json({msg:"Password updated successfully",updatepassword:updatepassword});
    } catch (error) {
      res.status(500).json({ message: 'Password don t change',error:error });
    }
  };


module.exports= {signup,signin,Search,deleteuser,updateusername,updateuserpassword}//exports all function backend