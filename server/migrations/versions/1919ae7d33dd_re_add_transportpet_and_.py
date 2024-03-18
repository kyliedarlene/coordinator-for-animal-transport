"""re-add TransportPet and TransportOrganization tables with correct table names

Revision ID: 1919ae7d33dd
Revises: 9b077de6339d
Create Date: 2024-03-18 00:02:49.504781

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1919ae7d33dd'
down_revision = '9b077de6339d'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('transport_organizations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('is_receiving', sa.Boolean(), default=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('transport_pets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    op.drop_table('transport_pets')
    op.drop_table('transport_organizations')
