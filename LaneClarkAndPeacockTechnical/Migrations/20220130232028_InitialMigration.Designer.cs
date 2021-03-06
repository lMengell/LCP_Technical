// <auto-generated />
using System;
using LaneClarkAndPeacockTechnical;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LaneClarkAndPeacockTechnical.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20220130232028_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.22");

            modelBuilder.Entity("LaneClarkAndPeacockTechnical.Classes.ClientNote", b =>
                {
                    b.Property<Guid>("ClientNoteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ClientDetailsId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Content")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("LastUpdatedAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("NoteCreatedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("ClientNoteId")
                        .HasName("ClientNoteId");

                    b.HasIndex("ClientDetailsId");

                    b.ToTable("ClientNotes");
                });

            modelBuilder.Entity("LaneClarkAndPeacockTechnical.ClientDetails", b =>
                {
                    b.Property<Guid>("ClientDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmailAddress")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("LastUpdatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.HasKey("ClientDetailsId")
                        .HasName("ClientDetailsId");

                    b.ToTable("ClientDetails");
                });

            modelBuilder.Entity("LaneClarkAndPeacockTechnical.Classes.ClientNote", b =>
                {
                    b.HasOne("LaneClarkAndPeacockTechnical.ClientDetails", null)
                        .WithMany("Notes")
                        .HasForeignKey("ClientDetailsId");
                });
#pragma warning restore 612, 618
        }
    }
}
