{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.yarn
    pkgs.concurrently
    pkgs.python3
    pkgs.awscli2
  ];
}

