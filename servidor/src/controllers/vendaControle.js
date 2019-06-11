const Venda = require("../models/venda");
const status = require("http-status");



exports.criarVenda = (req,res,next)=>{
    let venda = req.body;
    Venda.create(venda).then((novaVenda)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};


exports.listarVenda = (req,res,next)=>{
    Venda.findAll({attributes: ["id", "quantidade","valor"]}).then((vendas)=>{
        res.status(status.OK).send(vendas);
    }).catch((error)=>{
        next(erro);
    });

};


exports.buscarUmVenda = (req,res,next)=>{
    let id = req.params.id;
    Venda.findByPk(id).then((venda)=>{
        if (venda){
            res.status(status.OK).send(venda);
        }else{
            res.status(status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirVenda = (req,res,next) => {
    let id = req.params.id;
    console.log(id);
    //let vendab = req.body;
    Venda.findByPk(id).then((venda)=>{        
        if (venda){
            Venda.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarVenda = (req,res,next)=>{
    let id = req.params.id;    
    let vendaBody = req.body;    
    if (!vendaBody || !id){
        res.status(status.NO_CONTENT).send();
    }else{
        Venda.findByPk(id).then((venda)=>{
            if (venda){
                Venda.update({nome: vendaBody.nome, razao : vendaBody.razao, webSite: vendaBody.webSite,
                    docs: vendaBody.docs},{where : {id : id}}).then(()=>{
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