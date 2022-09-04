import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Length} from "class-validator"
import { User } from "./User"

@Entity("posts")

export class Post {
    @PrimaryGeneratedColumn()
    idpost: number

    @Column("varchar", {length: 300})
    @Length(1, 300)
    content: string

    @Column()
    @CreateDateColumn()
    created_at: Date

    @Column()
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name: "user_id"})
    user: User
}