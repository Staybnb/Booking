MYDIR="$(dirname "$(which "$0")")"
ECHO "hi"
mysql -u root --local-infile < /Users/benjaminmangold/HackReactor/sb-Booking/seed_mysql/seed.sql;