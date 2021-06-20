using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class Intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fathers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PriestlyRank = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PriestlyDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsDead = table.Column<bool>(type: "bit", nullable: false),
                    DeathDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fathers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Live",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    VideoId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Live", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Confessions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FathersId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Confessions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Confessions_Fathers_FathersId",
                        column: x => x.FathersId,
                        principalTable: "Fathers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ConfessionCalender",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Place = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ConfessionsId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfessionCalender", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConfessionCalender_Confessions_ConfessionsId",
                        column: x => x.ConfessionsId,
                        principalTable: "Confessions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ConfessionCalender_ConfessionsId",
                table: "ConfessionCalender",
                column: "ConfessionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Confessions_FathersId",
                table: "Confessions",
                column: "FathersId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConfessionCalender");

            migrationBuilder.DropTable(
                name: "Live");

            migrationBuilder.DropTable(
                name: "Confessions");

            migrationBuilder.DropTable(
                name: "Fathers");
        }
    }
}
