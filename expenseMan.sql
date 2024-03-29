USE [master]
GO
/****** Object:  Database [ExpenseManager]    Script Date: 17-May-19 5:27:22 PM ******/
CREATE DATABASE [ExpenseManager]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ExpenseManager', FILENAME = N'D:\Database\SQL\2016\MSSQL13.SQLSERVER2016\MSSQL\DATA\ExpenseManager.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ExpenseManager_log', FILENAME = N'D:\Database\SQL\2016\MSSQL13.SQLSERVER2016\MSSQL\DATA\ExpenseManager_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ExpenseManager] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ExpenseManager].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ExpenseManager] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ExpenseManager] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ExpenseManager] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ExpenseManager] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ExpenseManager] SET ARITHABORT OFF 
GO
ALTER DATABASE [ExpenseManager] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ExpenseManager] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ExpenseManager] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ExpenseManager] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ExpenseManager] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ExpenseManager] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ExpenseManager] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ExpenseManager] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ExpenseManager] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ExpenseManager] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ExpenseManager] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ExpenseManager] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ExpenseManager] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ExpenseManager] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ExpenseManager] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ExpenseManager] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ExpenseManager] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ExpenseManager] SET RECOVERY FULL 
GO
ALTER DATABASE [ExpenseManager] SET  MULTI_USER 
GO
ALTER DATABASE [ExpenseManager] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ExpenseManager] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ExpenseManager] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ExpenseManager] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ExpenseManager] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ExpenseManager', N'ON'
GO
ALTER DATABASE [ExpenseManager] SET QUERY_STORE = OFF
GO
USE [ExpenseManager]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [ExpenseManager]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](128) NOT NULL,
	[RoleId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](128) NOT NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[UserRoleId] [int] NULL,
	[CompanyDepartmentId] [int] NOT NULL,
	[HasChangePaqssword] [bit] NOT NULL,
	[CanMakePayment] [bit] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Company]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](128) NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CompanyDepartment]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyDepartment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyDepartment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Department]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseCategory]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseCategory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_ExpenseCategory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseDisbursement]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseDisbursement](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ExpenseRequisitionId] [int] NOT NULL,
	[OpeningBalance] [decimal](18, 0) NOT NULL,
	[AmountPaid] [decimal](18, 0) NOT NULL,
	[Balance]  AS ([OpeningBalance]-[AmountPaid]),
	[ReceiverId] [int] NOT NULL,
	[Description] [nvarchar](128) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_ExpenseDisbursement] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseItem]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseItem](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[ExpenseTypeId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_ExpenseItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseRequisition]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseRequisition](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyDepartmentId] [int] NOT NULL,
	[RequestTitle] [nvarchar](50) NOT NULL,
	[ExpenseItemId] [int] NOT NULL,
	[ExpenseDescription] [nvarchar](50) NOT NULL,
	[Quantity] [int] NOT NULL,
	[UnitPrice] [decimal](18, 0) NOT NULL,
	[TotalAmount] [decimal](18, 0) NOT NULL,
	[BeneficiaryId] [int] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[CreatedBy] [nvarchar](128) NOT NULL,
	[DisbursedBy] [nvarchar](128) NULL,
	[IsApproved] [bit] NOT NULL,
	[Workflow] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[RequiresExecutiveApproval] [bit] NOT NULL,
 CONSTRAINT [PK_ExpensePayment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseType]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ExpenseCategoryId] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_ExpenseType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RequisitionApprovalWorkflow]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RequisitionApprovalWorkflow](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AspNetUserId] [nvarchar](128) NOT NULL,
	[ExpenseRequisitionId] [int] NOT NULL,
	[Comment] [nvarchar](128) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_RequisitionApprovalWorkflow] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Staff]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Staff](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[PhoneNumber] [nvarchar](50) NULL,
	[DepartmentId] [int] NOT NULL,
 CONSTRAINT [PK_Staff] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 17-May-19 5:27:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsAdmin] [bit] NOT NULL,
	[RoleType] [int] NOT NULL,
 CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName], [FirstName], [LastName], [UserRoleId], [CompanyDepartmentId], [HasChangePaqssword], [CanMakePayment], [IsActive]) VALUES (N'b354f9ea-97eb-4b8f-9028-bc4aef54c0a0', N'bayo@gmail.com', 0, N'AETWz7oKc6wSUlp31tIDcBc+cMllC1rPWGtUSYEhzlvgz4/RXVJ1zSbprWuW32+bwg==', N'e93ea28e-c994-45dd-ba20-202772a92c38', NULL, 0, 0, NULL, 1, 0, N'bayo@gmail.com', N'Hohn', N'Bayo', 9, 1, 1, 0, 1)
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName], [FirstName], [LastName], [UserRoleId], [CompanyDepartmentId], [HasChangePaqssword], [CanMakePayment], [IsActive]) VALUES (N'd29e5c3c-e70e-4db8-bea2-d6f01159e2c5', N'glory@gmail.com', 0, N'ALpWa0DjwzkPzLtVNNx+zOiOwKVlPPIEv0p3u+sn65f41TVMwjeNWhPfwr/24ZoIkw==', N'7b066323-5166-4b19-a90c-8f901366b093', NULL, 0, 0, NULL, 1, 0, N'glory@gmail.com', N'Glory', N'Adegoke', 10, 1, 1, 1, 1)
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName], [FirstName], [LastName], [UserRoleId], [CompanyDepartmentId], [HasChangePaqssword], [CanMakePayment], [IsActive]) VALUES (N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', N'admin@xpensemanager.com', 0, N'AAlZVHlPFDHbMx+NYadrYBSD6UGTWM4S01HDBCTRjdYm/vvWsc83su5bUs6Dv3yByQ==', N'bb8c3f5c-50cc-4e1c-a137-80edf7f6533f', NULL, 0, 0, NULL, 1, 0, N'admin@xpensemanager.com', N'Ojo', N'Blessing', 9, 1, 1, 1, 1)
SET IDENTITY_INSERT [dbo].[Company] ON 

INSERT [dbo].[Company] ([Id], [Name], [Description]) VALUES (1, N'xPlug Technologies', NULL)
INSERT [dbo].[Company] ([Id], [Name], [Description]) VALUES (2, N'Vivid Tech', NULL)
INSERT [dbo].[Company] ([Id], [Name], [Description]) VALUES (3, N'Knowledge Ware', NULL)
SET IDENTITY_INSERT [dbo].[Company] OFF
SET IDENTITY_INSERT [dbo].[CompanyDepartment] ON 

INSERT [dbo].[CompanyDepartment] ([Id], [DepartmentId], [CompanyId], [IsActive]) VALUES (1, 1, 1, 1)
INSERT [dbo].[CompanyDepartment] ([Id], [DepartmentId], [CompanyId], [IsActive]) VALUES (2, 2, 1, 0)
INSERT [dbo].[CompanyDepartment] ([Id], [DepartmentId], [CompanyId], [IsActive]) VALUES (5, 3, 1, 1)
SET IDENTITY_INSERT [dbo].[CompanyDepartment] OFF
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([Id], [Name], [Description], [IsActive]) VALUES (1, N'Admin', NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Description], [IsActive]) VALUES (2, N'Dev Team', NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Description], [IsActive]) VALUES (3, N'QA ', NULL, 1)
INSERT [dbo].[Department] ([Id], [Name], [Description], [IsActive]) VALUES (4, N'Sales', NULL, 1)
SET IDENTITY_INSERT [dbo].[Department] OFF
SET IDENTITY_INSERT [dbo].[ExpenseCategory] ON 

INSERT [dbo].[ExpenseCategory] ([Id], [Name], [IsActive]) VALUES (1, N'Electrical/Electronic', 1)
INSERT [dbo].[ExpenseCategory] ([Id], [Name], [IsActive]) VALUES (2, N'Power/Generator', 1)
INSERT [dbo].[ExpenseCategory] ([Id], [Name], [IsActive]) VALUES (3, N'Petty Expnses', 1)
INSERT [dbo].[ExpenseCategory] ([Id], [Name], [IsActive]) VALUES (4, N'Salary Expenses', 1)
SET IDENTITY_INSERT [dbo].[ExpenseCategory] OFF
SET IDENTITY_INSERT [dbo].[ExpenseDisbursement] ON 

INSERT [dbo].[ExpenseDisbursement] ([Id], [ExpenseRequisitionId], [OpeningBalance], [AmountPaid], [ReceiverId], [Description], [DateCreated]) VALUES (5, 2, CAST(5000 AS Decimal(18, 0)), CAST(2500 AS Decimal(18, 0)), 1, N'Request to purchase fan', CAST(N'2019-05-17T10:48:40.007' AS DateTime))
SET IDENTITY_INSERT [dbo].[ExpenseDisbursement] OFF
SET IDENTITY_INSERT [dbo].[ExpenseItem] ON 

INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (1, N'AC Maintenace', NULL, 2, 1)
INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (2, N'Purchase of Fan', NULL, 2, 1)
INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (3, N'Purchase of Wires', NULL, 1, 1)
SET IDENTITY_INSERT [dbo].[ExpenseItem] OFF
SET IDENTITY_INSERT [dbo].[ExpenseRequisition] ON 

INSERT [dbo].[ExpenseRequisition] ([Id], [CompanyDepartmentId], [RequestTitle], [ExpenseItemId], [ExpenseDescription], [Quantity], [UnitPrice], [TotalAmount], [BeneficiaryId], [DateCreated], [CreatedBy], [DisbursedBy], [IsApproved], [Workflow], [Status], [RequiresExecutiveApproval]) VALUES (1, 1, N'Request to purchase fan', 1, N'Request to purchase fan', 6, CAST(1500 AS Decimal(18, 0)), CAST(9000 AS Decimal(18, 0)), 1, CAST(N'2019-05-13T10:14:04.240' AS DateTime), N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', NULL, 1, 5, 4, 1)
INSERT [dbo].[ExpenseRequisition] ([Id], [CompanyDepartmentId], [RequestTitle], [ExpenseItemId], [ExpenseDescription], [Quantity], [UnitPrice], [TotalAmount], [BeneficiaryId], [DateCreated], [CreatedBy], [DisbursedBy], [IsApproved], [Workflow], [Status], [RequiresExecutiveApproval]) VALUES (2, 1, N'Request to purchase fan', 3, N'Request to purchase fan', 2, CAST(2500 AS Decimal(18, 0)), CAST(5000 AS Decimal(18, 0)), 1, CAST(N'2019-05-17T08:44:50.820' AS DateTime), N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', NULL, 1, 5, 4, 0)
SET IDENTITY_INSERT [dbo].[ExpenseRequisition] OFF
SET IDENTITY_INSERT [dbo].[ExpenseType] ON 

INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (1, 1, N'Amendment/Repair', 1)
INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (2, 4, N'Purchase of Item', 1)
INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (3, 2, N'Monthly Bill', 1)
SET IDENTITY_INSERT [dbo].[ExpenseType] OFF
SET IDENTITY_INSERT [dbo].[RequisitionApprovalWorkflow] ON 

INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (5, N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', 1, N'Sent for approval', CAST(N'2019-05-16T12:41:45.053' AS DateTime), 1)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (6, N'd29e5c3c-e70e-4db8-bea2-d6f01159e2c5', 1, N'ok', CAST(N'2019-05-16T12:47:58.413' AS DateTime), 2)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (7, N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', 1, N'Sent for approval', CAST(N'2019-05-16T12:48:23.183' AS DateTime), 2)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (8, N'd29e5c3c-e70e-4db8-bea2-d6f01159e2c5', 1, N'ok', CAST(N'2019-05-16T12:50:58.443' AS DateTime), 3)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (9, N'b354f9ea-97eb-4b8f-9028-bc4aef54c0a0', 1, N'ok', CAST(N'2019-05-16T12:53:20.853' AS DateTime), 3)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (10, N'd29e5c3c-e70e-4db8-bea2-d6f01159e2c5', 1, N'ok', CAST(N'2019-05-16T13:57:35.123' AS DateTime), 4)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (11, N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', 2, N'Sent for approval', CAST(N'2019-05-17T09:52:44.073' AS DateTime), 1)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (12, N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', 2, N'Ok', CAST(N'2019-05-17T10:26:40.237' AS DateTime), 3)
INSERT [dbo].[RequisitionApprovalWorkflow] ([Id], [AspNetUserId], [ExpenseRequisitionId], [Comment], [DateCreated], [Status]) VALUES (13, N'ed9d2bcc-22f5-47f1-8b4c-d6c0b4bdd8b4', 2, N'OK', CAST(N'2019-05-17T10:27:21.330' AS DateTime), 4)
SET IDENTITY_INSERT [dbo].[RequisitionApprovalWorkflow] OFF
SET IDENTITY_INSERT [dbo].[Staff] ON 

INSERT [dbo].[Staff] ([Id], [FirstName], [LastName], [PhoneNumber], [DepartmentId]) VALUES (1, N'Moses', N'Adebayo', N'08021547854', 1)
INSERT [dbo].[Staff] ([Id], [FirstName], [LastName], [PhoneNumber], [DepartmentId]) VALUES (2, N'Mary', N'Ojo', N'07125487523', 1)
INSERT [dbo].[Staff] ([Id], [FirstName], [LastName], [PhoneNumber], [DepartmentId]) VALUES (3, N'Moses', N'Adebayo', N'9895102305', 3)
SET IDENTITY_INSERT [dbo].[Staff] OFF
SET IDENTITY_INSERT [dbo].[UserRole] ON 

INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (1, N'Other User', 0, 1)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (3, N'Head of Department', 0, 2)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (4, N'Admin', 1, 3)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (6, N'General Manager ', 0, 4)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (9, N'Head Of Account', 0, 5)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (10, N'Executive', 0, 6)
SET IDENTITY_INSERT [dbo].[UserRole] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [RoleNameIndex]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_RoleId]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserRoles]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UserNameIndex]    Script Date: 17-May-19 5:27:26 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetUsers] ADD  CONSTRAINT [DF_AspNetUsers_HasChangePaqssword]  DEFAULT ((0)) FOR [HasChangePaqssword]
GO
ALTER TABLE [dbo].[AspNetUsers] ADD  CONSTRAINT [DF_AspNetUsers_CanMakePayment]  DEFAULT ((0)) FOR [CanMakePayment]
GO
ALTER TABLE [dbo].[AspNetUsers] ADD  CONSTRAINT [DF_AspNetUsers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[CompanyDepartment] ADD  CONSTRAINT [DF_CompanyDepartment_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Department] ADD  CONSTRAINT [DF_Department_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ExpenseCategory] ADD  CONSTRAINT [DF_ExpenseCategory_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ExpenseItem] ADD  CONSTRAINT [DF_ExpenseItem_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ExpenseRequisition] ADD  CONSTRAINT [DF_ExpenseRequisition_IsApproved]  DEFAULT ((0)) FOR [IsApproved]
GO
ALTER TABLE [dbo].[ExpenseRequisition] ADD  CONSTRAINT [DF_ExpenseRequisition_RequiresExecutiveApproval]  DEFAULT ((0)) FOR [RequiresExecutiveApproval]
GO
ALTER TABLE [dbo].[ExpenseType] ADD  CONSTRAINT [DF_ExpenseType_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUsers]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUsers_CompanyDepartment] FOREIGN KEY([CompanyDepartmentId])
REFERENCES [dbo].[CompanyDepartment] ([Id])
GO
ALTER TABLE [dbo].[AspNetUsers] CHECK CONSTRAINT [FK_AspNetUsers_CompanyDepartment]
GO
ALTER TABLE [dbo].[AspNetUsers]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUsers_UserRole] FOREIGN KEY([UserRoleId])
REFERENCES [dbo].[UserRole] ([Id])
GO
ALTER TABLE [dbo].[AspNetUsers] CHECK CONSTRAINT [FK_AspNetUsers_UserRole]
GO
ALTER TABLE [dbo].[CompanyDepartment]  WITH CHECK ADD  CONSTRAINT [FK_CompanyDepartment_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[CompanyDepartment] CHECK CONSTRAINT [FK_CompanyDepartment_Company]
GO
ALTER TABLE [dbo].[CompanyDepartment]  WITH CHECK ADD  CONSTRAINT [FK_CompanyDepartment_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([Id])
GO
ALTER TABLE [dbo].[CompanyDepartment] CHECK CONSTRAINT [FK_CompanyDepartment_Department]
GO
ALTER TABLE [dbo].[ExpenseDisbursement]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseDisbursement_ExpenseRequisition] FOREIGN KEY([ExpenseRequisitionId])
REFERENCES [dbo].[ExpenseRequisition] ([Id])
GO
ALTER TABLE [dbo].[ExpenseDisbursement] CHECK CONSTRAINT [FK_ExpenseDisbursement_ExpenseRequisition]
GO
ALTER TABLE [dbo].[ExpenseDisbursement]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseDisbursement_Staff] FOREIGN KEY([ReceiverId])
REFERENCES [dbo].[Staff] ([Id])
GO
ALTER TABLE [dbo].[ExpenseDisbursement] CHECK CONSTRAINT [FK_ExpenseDisbursement_Staff]
GO
ALTER TABLE [dbo].[ExpenseItem]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseItem_ExpenseType] FOREIGN KEY([ExpenseTypeId])
REFERENCES [dbo].[ExpenseType] ([Id])
GO
ALTER TABLE [dbo].[ExpenseItem] CHECK CONSTRAINT [FK_ExpenseItem_ExpenseType]
GO
ALTER TABLE [dbo].[ExpenseRequisition]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseRequisition_AspNetUsers] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[ExpenseRequisition] CHECK CONSTRAINT [FK_ExpenseRequisition_AspNetUsers]
GO
ALTER TABLE [dbo].[ExpenseRequisition]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseRequisition_AspNetUsers1] FOREIGN KEY([DisbursedBy])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[ExpenseRequisition] CHECK CONSTRAINT [FK_ExpenseRequisition_AspNetUsers1]
GO
ALTER TABLE [dbo].[ExpenseRequisition]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseRequisition_CompanyDepartment] FOREIGN KEY([CompanyDepartmentId])
REFERENCES [dbo].[CompanyDepartment] ([Id])
GO
ALTER TABLE [dbo].[ExpenseRequisition] CHECK CONSTRAINT [FK_ExpenseRequisition_CompanyDepartment]
GO
ALTER TABLE [dbo].[ExpenseRequisition]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseRequisition_ExpenseItem] FOREIGN KEY([ExpenseItemId])
REFERENCES [dbo].[ExpenseItem] ([Id])
GO
ALTER TABLE [dbo].[ExpenseRequisition] CHECK CONSTRAINT [FK_ExpenseRequisition_ExpenseItem]
GO
ALTER TABLE [dbo].[ExpenseRequisition]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseRequisition_Staff] FOREIGN KEY([BeneficiaryId])
REFERENCES [dbo].[Staff] ([Id])
GO
ALTER TABLE [dbo].[ExpenseRequisition] CHECK CONSTRAINT [FK_ExpenseRequisition_Staff]
GO
ALTER TABLE [dbo].[ExpenseType]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseType_ExpenseCategory] FOREIGN KEY([ExpenseCategoryId])
REFERENCES [dbo].[ExpenseCategory] ([Id])
GO
ALTER TABLE [dbo].[ExpenseType] CHECK CONSTRAINT [FK_ExpenseType_ExpenseCategory]
GO
ALTER TABLE [dbo].[RequisitionApprovalWorkflow]  WITH CHECK ADD  CONSTRAINT [FK_RequisitionApprovalWorkflow_AspNetUsers] FOREIGN KEY([AspNetUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[RequisitionApprovalWorkflow] CHECK CONSTRAINT [FK_RequisitionApprovalWorkflow_AspNetUsers]
GO
ALTER TABLE [dbo].[RequisitionApprovalWorkflow]  WITH CHECK ADD  CONSTRAINT [FK_RequisitionApprovalWorkflow_ExpenseRequisition] FOREIGN KEY([ExpenseRequisitionId])
REFERENCES [dbo].[ExpenseRequisition] ([Id])
GO
ALTER TABLE [dbo].[RequisitionApprovalWorkflow] CHECK CONSTRAINT [FK_RequisitionApprovalWorkflow_ExpenseRequisition]
GO
ALTER TABLE [dbo].[Staff]  WITH CHECK ADD  CONSTRAINT [FK_Staff_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([Id])
GO
ALTER TABLE [dbo].[Staff] CHECK CONSTRAINT [FK_Staff_Department]
GO
USE [master]
GO
ALTER DATABASE [ExpenseManager] SET  READ_WRITE 
GO
