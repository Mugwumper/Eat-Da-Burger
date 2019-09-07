USE brvc27ktlihuyg6b;
DROP TABLE burgers;
 CREATE TABLE burgers
    (
        id INT NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR(50) NOT NULL,
        devoured BOOLEAN DEFAULT false,
        PRIMARY KEY (id)
    );
    INSERT INTO burgers (burger_name, devoured)
    VALUES ("turkey burger", false), ("black bean burger", false), ("tofu burger", false);
