using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class updatefatherandconfessions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConfessionCalender_Confessions_ConfessionsId",
                table: "ConfessionCalender");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ConfessionCalender",
                table: "ConfessionCalender");

            migrationBuilder.RenameTable(
                name: "ConfessionCalender",
                newName: "confessionCalenders");

            migrationBuilder.RenameIndex(
                name: "IX_ConfessionCalender_ConfessionsId",
                table: "confessionCalenders",
                newName: "IX_confessionCalenders_ConfessionsId");

            migrationBuilder.AddColumn<int>(
                name: "FatherId",
                table: "Confessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FathersId1",
                table: "Confessions",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_confessionCalenders",
                table: "confessionCalenders",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Bishop",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BishopType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonasticDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OrdinationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bishop", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Confessions_FathersId1",
                table: "Confessions",
                column: "FathersId1");

            migrationBuilder.AddForeignKey(
                name: "FK_confessionCalenders_Confessions_ConfessionsId",
                table: "confessionCalenders",
                column: "ConfessionsId",
                principalTable: "Confessions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Confessions_Fathers_FathersId1",
                table: "Confessions",
                column: "FathersId1",
                principalTable: "Fathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_confessionCalenders_Confessions_ConfessionsId",
                table: "confessionCalenders");

            migrationBuilder.DropForeignKey(
                name: "FK_Confessions_Fathers_FathersId1",
                table: "Confessions");

            migrationBuilder.DropTable(
                name: "Bishop");

            migrationBuilder.DropIndex(
                name: "IX_Confessions_FathersId1",
                table: "Confessions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_confessionCalenders",
                table: "confessionCalenders");

            migrationBuilder.DropColumn(
                name: "FatherId",
                table: "Confessions");

            migrationBuilder.DropColumn(
                name: "FathersId1",
                table: "Confessions");

            migrationBuilder.RenameTable(
                name: "confessionCalenders",
                newName: "ConfessionCalender");

            migrationBuilder.RenameIndex(
                name: "IX_confessionCalenders_ConfessionsId",
                table: "ConfessionCalender",
                newName: "IX_ConfessionCalender_ConfessionsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ConfessionCalender",
                table: "ConfessionCalender",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ConfessionCalender_Confessions_ConfessionsId",
                table: "ConfessionCalender",
                column: "ConfessionsId",
                principalTable: "Confessions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
