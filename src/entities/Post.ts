import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Length} from "class-validator"
import { User } from "./User"

@Entity("posts")

export class Post {
    @PrimaryGeneratedColumn()
    idpost: number

    @Column({type: "text"})
    @Length(1, 300)
    content: string

    @Column({type: "date"})
    @CreateDateColumn()
    created_at: Date

    @Column({type: "date"})
    @UpdateDateColumn()
    updated_ate: Date

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name: "user_id"})
    user: User
}