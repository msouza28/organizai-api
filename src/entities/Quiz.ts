import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    QuizId: number

    @Column()
    UserId: number

    @Column()
    isAnswered: boolean

    @Column()
    isCadUni: boolean

    @Column("decimal", { precision: 10, scale: 2 })
    rendaMensal: number

    @Column()
    qtnPorFamilia: number

    @Column()
    isOlder: boolean

    @Column()
    isRural: boolean

    @Column("date")
    dataCriacao: Date

    @ManyToOne(() => User, user => user.quizzes)
    @JoinColumn({ name: "UserId" })
    user: User
}