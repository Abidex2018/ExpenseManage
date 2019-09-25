USE [master]
GO
/****** Object:  Database [ExpenseManager]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE DATABASE [ExpenseManager]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ExpenseManager', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLSERVER2014\MSSQL\DATA\ExpenseManager.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ExpenseManager_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLSERVER2014\MSSQL\DATA\ExpenseManager_log.ldf' , SIZE = 1280KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ExpenseManager] SET COMPATIBILITY_LEVEL = 120
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
USE [ExpenseManager]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 5/19/2019 10:15:53 PM ******/
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
	[HasChangePaqssword] [bit] NOT NULL CONSTRAINT [DF_AspNetUsers_HasChangePaqssword]  DEFAULT ((0)),
	[CanMakePayment] [bit] NOT NULL CONSTRAINT [DF_AspNetUsers_CanMakePayment]  DEFAULT ((0)),
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_AspNetUsers_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Company]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[CompanyDepartment]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyDepartment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_CompanyDepartment_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_CompanyDepartment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Department]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_Department_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseCategory]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseCategory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ExpenseCategory_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_ExpenseCategory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseDisbursement]    Script Date: 5/19/2019 10:15:53 PM ******/
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
	[ReceiverId] [nvarchar](128) NOT NULL,
	[Description] [nvarchar](128) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_ExpenseDisbursement] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseItem]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseItem](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NULL,
	[ExpenseTypeId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ExpenseItem_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_ExpenseItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ExpenseRequisition]    Script Date: 5/19/2019 10:15:53 PM ******/
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
	[BeneficiaryId] [nvarchar](128) NOT NULL,
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
/****** Object:  Table [dbo].[ExpenseType]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ExpenseCategoryId] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_ExpenseType_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_ExpenseType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RequisitionApprovalWorkflow]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[Staff]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Staff](
	[AspNetUserId] [nvarchar](128) NOT NULL,
	[Designation] [nvarchar](50) NULL,
 CONSTRAINT [PK_Staff_1] PRIMARY KEY CLUSTERED 
(
	[AspNetUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 5/19/2019 10:15:53 PM ******/
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
/****** Object:  Table [dbo].[WorkflowLevel]    Script Date: 5/19/2019 10:15:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkflowLevel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LevelNo] [int] NOT NULL,
 CONSTRAINT [PK_WorkflowLevel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName], [FirstName], [LastName], [UserRoleId], [CompanyDepartmentId], [HasChangePaqssword], [CanMakePayment], [IsActive]) VALUES (N'b354f9ea-97eb-4b8f-9028-bc4aef54c0a0', N'bayo@gmail.com', 0, N'AETWz7oKc6wSUlp31tIDcBc+cMllC1rPWGtUSYEhzlvgz4/RXVJ1zSbprWuW32+bwg==', N'e93ea28e-c994-45dd-ba20-202772a92c38', NULL, 0, 0, NULL, 1, 0, N'bayo@gmail.com', N'Bayo', N'Hohn', 4, 1, 1, 0, 1)
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
SET IDENTITY_INSERT [dbo].[ExpenseItem] ON 

INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (1, N'AC Maintenace', NULL, 2, 1)
INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (2, N'Purchase of Fan', NULL, 2, 1)
INSERT [dbo].[ExpenseItem] ([Id], [Name], [Description], [ExpenseTypeId], [IsActive]) VALUES (3, N'Purchase of Wires', NULL, 1, 1)
SET IDENTITY_INSERT [dbo].[ExpenseItem] OFF
SET IDENTITY_INSERT [dbo].[ExpenseType] ON 

INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (1, 1, N'Amendment/Repair', 1)
INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (2, 4, N'Purchase of Item', 1)
INSERT [dbo].[ExpenseType] ([Id], [ExpenseCategoryId], [Name], [IsActive]) VALUES (3, 2, N'Monthly Bill', 1)
SET IDENTITY_INSERT [dbo].[ExpenseType] OFF
SET IDENTITY_INSERT [dbo].[UserRole] ON 

INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (1, N'Other User', 0, 1)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (3, N'Head of Department', 0, 2)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (4, N'Admin', 1, 3)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (6, N'General Manager ', 0, 4)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (9, N'Head Of Account', 0, 5)
INSERT [dbo].[UserRole] ([Id], [Name], [IsAdmin], [RoleType]) VALUES (10, N'Executive', 0, 6)
SET IDENTITY_INSERT [dbo].[UserRole] OFF
SET IDENTITY_INSERT [dbo].[WorkflowLevel] ON 

INSERT [dbo].[WorkflowLevel] ([Id], [Name], [LevelNo]) VALUES (1, N'Awaiting Approval', 1)
INSERT [dbo].[WorkflowLevel] ([Id], [Name], [LevelNo]) VALUES (2, N'Awaiting Approval', 2)
INSERT [dbo].[WorkflowLevel] ([Id], [Name], [LevelNo]) VALUES (3, N'Awaiting Approval', 3)
INSERT [dbo].[WorkflowLevel] ([Id], [Name], [LevelNo]) VALUES (4, N'Awaiting Final Approval', 4)
SET IDENTITY_INSERT [dbo].[WorkflowLevel] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [RoleNameIndex]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_RoleId]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_UserId]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserRoles]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UserNameIndex]    Script Date: 5/19/2019 10:15:53 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExpenseRequisition] ADD  CONSTRAINT [DF_ExpenseRequisition_IsApproved]  DEFAULT ((0)) FOR [IsApproved]
GO
ALTER TABLE [dbo].[ExpenseRequisition] ADD  CONSTRAINT [DF_ExpenseRequisition_RequiresExecutiveApproval]  DEFAULT ((0)) FOR [RequiresExecutiveApproval]
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
REFERENCES [dbo].[Staff] ([AspNetUserId])
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
REFERENCES [dbo].[Staff] ([AspNetUserId])
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
ALTER TABLE [dbo].[Staff]  WITH CHECK ADD  CONSTRAINT [FK_Staff_AspNetUsers] FOREIGN KEY([AspNetUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[Staff] CHECK CONSTRAINT [FK_Staff_AspNetUsers]
GO
USE [master]
GO
ALTER DATABASE [ExpenseManager] SET  READ_WRITE 
GO
