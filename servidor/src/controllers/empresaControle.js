// não finalizado

const Empresa = require("../models/empresa");
const status = require("http-status");
const mysql = require('../config/banco');


exports.criarEmpresa = (req,res,next)=>{
    let empresa = req.body;
    Empresa.create(empresa).then((novoEmpresa)=>{
       res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};




exports.listarEmpresa = (req,res,next)=>{
    Empresa.findAll({attributes: ["id", "nome", "razao", "webSite"]}).then((empresas)=>{
        res.status(status.OK).send(empresas);
    }).catch((erro)=>{
        next(erro);
    });
};


exports.buscarUmEmpresa = (req,res,next)=>{
    let id = req.params.id;
    Empresa.findByPk(id).then((empresa)=>{
        if (empresa){
            res.status(status.OK).send(empresa);
        }else{
            res.status(status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirEmpresa = (req,res,next) => {
    let id = req.params.id;
    console.log(id);
    //let empresab = req.body;
    Empresa.findByPk(id).then((empresa)=>{        
        if (empresa){
            Empresa.destroy({ where: {id : id}}).then(()=>{
                res.status(status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarEmpresa = (req,res,next)=>{
    let id = req.params.id;    
    let empresaBody = req.body;    
    if (!empresaBody || !id){
        res.status(status.NO_CONTENT).send();
    }else{
        Empresa.findByPk(id).then((empresa)=>{
            if (empresa){
                Empresa.update({nome: empresaBody.nome, razao : empresaBody.razao, webSite: empresaBody.webSite,
                    docs: empresaBody.docs},{where : {id : id}}).then(()=>{
                    res.status(status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};