# good nix template: https://srid.ca/rust-nix

{
    inputs = {
        nixpkgs.url = "nixpkgs";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
        let
            pkgs = nixpkgs.legacyPackages.${system};

            nativeBuildInputs = with pkgs; [
                pkg-config
            ];

            packages = with pkgs; [
                wget
                dbus
                openssl_3
                nodejs_18
                yarn
            ];

            buildInputs = packages;
        in
        rec {
            # `nix develop`
            devShell = pkgs.mkShell {
                inherit buildInputs nativeBuildInputs;
                shellHook = ''
                
                '';
            };
        });
}