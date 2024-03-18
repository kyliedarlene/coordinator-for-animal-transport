"""drop TransportPets and TransportOrganizations tables

Revision ID: 9b077de6339d
Revises: 12ea5f1b7710
Create Date: 2024-03-17 23:59:34.363351

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9b077de6339d'
down_revision = '12ea5f1b7710'
branch_labels = None
depends_on = None


def upgrade():
    op.drop_table('transport_pets')
    op.drop_table('transport_organizations')


def downgrade():
    pass
