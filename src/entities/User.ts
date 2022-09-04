import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Length, IsNotEmpty } from "class-validator"
import { Post } from "./Post"

@Entity("users")
@Unique(["email"])

export class User {
    @PrimaryGeneratedColumn()
    iduser: number

    @Column()
    @Length(4, 70)
    @IsNotEmpty()
    name: string

    @Column()
    @Length(8, 70)
    @IsNotEmpty()
    email: string

    @Column()
    @IsNotEmpty()
    apartment: number

    @Column()
    @Length(8, 120)
    @IsNotEmpty()
    password: string

    @Column()
    @IsNotEmpty()
    role: string

    @Column()
    @Length(1,1000)
    userimg: string

    @Column()
    @CreateDateColumn()
    created_at: Date

    @Column()
    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}