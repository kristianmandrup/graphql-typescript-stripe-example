import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text", { default: "free-trial" })
  type: string;
}
