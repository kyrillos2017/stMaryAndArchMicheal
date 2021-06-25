using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class confessions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Confessions_Fathers_FathersId",
                table: "Confessions");

            migrationBuilder.DropTable(
                name: "confessionCalenders");

            migrationBuilder.DropColumn(
                name: "FatherId",
                table: "Confessions");

            migrationBuilder.AlterColumn<int>(
                name: "FathersId",
                table: "Confessions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "Confessions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Confessions",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Confessions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartTime",
                table: "Confessions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Confessions_Fathers_FathersId",
                table: "Confessions",
                column: "FathersId",
                principalTable: "Fathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Confessions_Fathers_FathersId",
                table: "Confessions");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Confessions");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Confessions");

            migrationBuilder.DropColumn(
                name: "Place",
                table: "Confessions");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Confessions");

            migrationBuilder.AlterColumn<int>(
                name: "FathersId",
                table: "Confessions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "FatherId",
                table: "Confessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "confessionCalenders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConfessionsId = table.Column<int>(type: "int", nullable: true),
                    EndTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Place = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_confessionCalenders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_confessionCalenders_Confessions_ConfessionsId",
                        column: x => x.ConfessionsId,
                        principalTable: "Confessions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_confessionCalenders_ConfessionsId",
                table: "confessionCalenders",
                column: "ConfessionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Confessions_Fathers_FathersId",
                table: "Confessions",
                column: "FathersId",
                principalTable: "Fathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
