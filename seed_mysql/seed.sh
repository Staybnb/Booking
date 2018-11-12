

MYDIR="$(dirname "$(which "$0")")"
mysql -u root --local-infile < /Users/benjaminmangold/HackReactor/sb-Booking/seed_mysql/seed.sql;
