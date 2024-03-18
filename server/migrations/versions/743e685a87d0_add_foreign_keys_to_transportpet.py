"""add foreign keys to TransportPet

Revision ID: 743e685a87d0
Revises: 1bccdebae6c3
Create Date: 2024-03-18 00:49:39.098661

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '743e685a87d0'
down_revision = '1bccdebae6c3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('transport_pets', schema=None) as batch_op:
        batch_op.add_column(sa.Column('transport_id', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('pet_id', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('receiving_org_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_transport_pets_transport_id_transports'), 'transports', ['transport_id'], ['id'])
        batch_op.create_foreign_key(batch_op.f('fk_transport_pets_receiving_org_id_organizations'), 'organizations', ['receiving_org_id'], ['id'])
        batch_op.create_foreign_key(batch_op.f('fk_transport_pets_pet_id_pets'), 'pets', ['pet_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('transport_pets', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_transport_pets_pet_id_pets'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_transport_pets_receiving_org_id_organizations'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_transport_pets_transport_id_transports'), type_='foreignkey')
        batch_op.drop_column('receiving_org_id')
        batch_op.drop_column('pet_id')
        batch_op.drop_column('transport_id')

    # ### end Alembic commands ###