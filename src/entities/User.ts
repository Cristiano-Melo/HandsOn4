import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Length, IsNotEmpty } from "class-validator"
import { Post } from "./Post"

@Entity("users")
@Unique(["email"])

export class User {
    @PrimaryGeneratedColumn()
    iduser: number

    @Column({type: "varchar"})
    @Length(1, 70)
    @IsNotEmpty()
    name: string

    @Column({type: "varchar"})
    @Length(70)
    @IsNotEmpty()
    email: string

    @Column({type: "integer"})
    @IsNotEmpty()
    apartment: number

    @Column({type: "varchar"})
    @Length(8, 120)
    @IsNotEmpty()
    password: string

    @Column({type: "date"})
    @CreateDateColumn()
    created_at: Date

    @Column({type: "date"})
    @UpdateDateColumn()
    updated_ate: Date

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}