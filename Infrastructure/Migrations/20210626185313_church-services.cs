using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class churchservices : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_SundayMeeting",
                table: "SundayMeeting");

            migrationBuilder.RenameTable(
                name: "SundayMeeting",
                newName: "SundayMeetings");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Fathers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SundayMeetings",
                table: "SundayMeetings",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "AboutChurch",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BannerImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutChurch", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChurchServices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    BannerImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChurchServices", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AboutChurch");

            migrationBuilder.DropTable(
                name: "ChurchServices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SundayMeetings",
                table: "SundayMeetings");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Fathers");

            migrationBuilder.RenameTable(
                name: "SundayMeetings",
                newName: "SundayMeeting");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SundayMeeting",
                table: "SundayMeeting",
                column: "Id");
        }
    }
}
