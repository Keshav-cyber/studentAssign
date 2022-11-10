const studentModel = require('../models/studentModel')

const createStudent = async function (req,res){
  try{
      let {name,subject,marks} = req.body
      let student = await studentModel.findOne({name:name,subject:subject})
      if(student) marks = student.marks + marks
      let createStudent = await studentModel.create(req.body)
      res.status(201).send(createStudent)

  }catch(error){
    res.status(500).send({ msg: error.message })
  }
}

const getStudents = async function (req,res){
  try{
    
     let students = await studentModel.find({isDeleted:false})
     res.status(200).send(students)
  }catch(error){
    res.status(500).send({ msg: error.message })
  }
}

const updateStudent = async function(req,res){
     try{
        
       let id = req.params.studentID
       
       let update = await studentModel.updateOne({_id:id} ,{$set:req.body},{new:true})
       res.send(update)
     }catch(error){
      res.status(500).send({ msg: error.message })
     }
}
const deleteStudent = async function(req,res){
  try{

    let id = req.params.studentID
    
    let update = await studentModel.updateOne({_id:id} ,{isDeleted:true},{new:true})
    res.send(update)
  }catch(error){
   res.status(500).send({ msg: error.message })
  }
}


module.exports.createStudent =createStudent
module.exports.getStudents =getStudents
module.exports.updateStudent =updateStudent
module.exports.deleteStudent =deleteStudent