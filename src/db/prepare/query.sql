create table Users (
    username varchar(255) not null,
    password varchar(255) not null
);

create table Inventory (
    sku varchar(255) not null,
    description varchar(255) not null,
    instock int not null,

    primary key (sku)
);

create table Orders (
    item varchar(255),
    price int not null,
    quantity int not null,

    foreign key (item) references Inventory(sku)
);

insert into Users values
('admin', 'MindX@2022'),
('alice', 'MindX@2022');

insert into Inventory values
('almonds', 'product 1', 120),
('bread', 'product 2', 80),
('cashews', 'product 3', 60),
('pecans', 'product 4', 70);

insert into Orders values
('almonds', 12, 2),
('pecans', 20, 1),
('pecans', 20, 3);
