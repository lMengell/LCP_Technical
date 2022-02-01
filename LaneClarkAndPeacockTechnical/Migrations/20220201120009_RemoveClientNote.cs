using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LaneClarkAndPeacockTechnical.Migrations
{
    public partial class RemoveClientNote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientNotes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClientNotes",
                columns: table => new
                {
                    ClientNoteId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ClientDetailsId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Content = table.Column<string>(type: "TEXT", nullable: true),
                    LastUpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    NoteCreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("ClientNoteId", x => x.ClientNoteId);
                    table.ForeignKey(
                        name: "FK_ClientNotes_ClientDetails_ClientDetailsId",
                        column: x => x.ClientDetailsId,
                        principalTable: "ClientDetails",
                        principalColumn: "ClientDetailsId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClientNotes_ClientDetailsId",
                table: "ClientNotes",
                column: "ClientDetailsId");
        }
    }
}
