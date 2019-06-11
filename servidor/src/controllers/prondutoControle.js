const Produto = require("../models/produto");
const status = require("http-status");

exports.criarProduto = (req,res,next)=>{
    let produto = req.body;
    Produto.create(produto).then((novoProduto)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarProduto = (req,res,next)=>{
    Produto.findAll({attributes: ["id", "nome"]}).then((produtos)=>{
        res.status(status.OK).send(produtos);
    }).catch((erro)=>{
        next(erro);
    });
};



exports.buscarProduto = (req,res,next)=>{
    let id = (req.params.id);
    Produto.findByPk(id).then((produto)=>{
        if (produto){
            res.status(Status.OK).send(produto);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirProduto = (req,res,next) => {
    let id = (req.params.id);
    Produto.findByPk(id).then((produto)=>{        
        if (produto){
            Produto.destroy({ where: {id : id}}).then(()=>{
                res.status(Status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarProduto = (req,res,next)=>{
    let id = (req.params.id);    
    let produtoBody = req.body;    
    if (!produtoBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Produto.findByPk(id).then((produto)=>{
            if (produto){
                Produto.update({nome: produtoBody.nome, status : produtoBody.status, codigo: produtoBody.codigo, 
                preco: produtoBody.preco, qtdEstoque: produtoBody.qtdEstoque, categoria: produtoBody.categoria},{where : {id : id}}).then(()=>{
                    res.status(Status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(Status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};