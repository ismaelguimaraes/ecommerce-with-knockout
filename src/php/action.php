<?php
    $server_name = "108.179.252.134";
    $database = "missfito_sorteio";
    $username = "missfito_admin";
    $password = "qa2whm60";

    $conn = mysqli_connect($server_name, $username, $password, $database);
    
    if (!$conn) {
        die("Connection failed: ".mysqli_connect_error());
    }

    $name = strip_tags(trim($_POST['nome']));
    $whatsapp = strip_tags(trim($_POST['whatsapp']));
    $instagram = strip_tags(trim($_POST['instagram']));

    $sql = "INSERT INTO sorteio (nome, whatsapp, instagram) VALUES ('$name', '$whatsapp', '$instagram')";
    $userExist = mysqli_query($conn, "SELECT * FROM sorteio WHERE instagram = '$instagram' OR nome = '$nome' OR whatsapp = '$whatsapp' LIMIT 1");

    $rows = mysqli_num_rows($userExist);

    if($rows != false) {
        echo "<script>window.location.href='../cadastro-fail.html';</script>";
    } else {
        if(!mysqli_query($conn, $sql)) {
            // echo "<script>window.location.href='../concluido-sucesso.html';</script>";
            echo "Error: ". $sql . "<br/>". mysqli_error($conn);
        }
    }
    
    mysqli_close($conn);
?>