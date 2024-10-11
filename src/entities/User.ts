import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Quiz } from "./Quiz"
import { Categoria } from "./Categoria"
import { Transacao } from "./Transacao"
import { UsuarioBanco } from "./UsuarioBanco"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UserId: number

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column({ nullable: true })
    cpf: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    senha: string

    @OneToMany(() => Quiz, quiz => quiz.user)
    quizzes: Quiz[]

    @ManyToMany(() => Categoria)
    @JoinTable({ name: "UsuarioCategoria" })
    categorias: Categoria[]

    @OneToMany(() => Transacao, transacao => transacao.usuario)
    transacoes: Transacao[]

    @OneToMany(() => UsuarioBanco, usuarioBanco => usuarioBanco.user)
    usuarioBancos: UsuarioBanco[]
}