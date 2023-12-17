const { Entity, PrimaryGeneratedColumn, Column }=require("typeorm")

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: number
}