import graphviz

# Criando o diagrama ER com Graphviz
er = graphviz.Digraph('ER', format='png')

# Configurações de estilo
er.attr('node', shape='record', fontsize='10')

# Entidades
er.node('Medico', '<f0> id_medico |<f1> nome', label='Médico|{<f0> id_medico|<f1> nome}')
er.node('Tratamento', '''<f0> id_tratamento |
<f1> nome |
<f2> data_inicio |
<f3> duracao_estimada |
<f4> descricao |
<f5> tipo |
<f6> medico_responsavel''', label='Tratamento|{<f0> id_tratamento|<f1> nome|<f2> data_inicio|<f3> duracao_estimada|<f4> descricao|<f5> tipo|<f6> medico_responsavel}')

# Entidades especializadas
er.node('Tratamento_Cirurgico', '''<f0> id_tratamento |
<f1> tipo_cirurgia |
<f2> local_cirurgia |
<f3> anestesia''', label='Tratamento_Cirurgico|{<f0> id_tratamento|<f1> tipo_cirurgia|<f2> local_cirurgia|<f3> anestesia}')

er.node('Tratamento_Nao_Cirurgico', '''<f0> id_tratamento |
<f1> tipo_medicamento |
<f2> recomendacoes''', label='Tratamento_Nao_Cirurgico|{<f0> id_tratamento|<f1> tipo_medicamento|<f2> recomendacoes}')

# Relacionamentos
er.edge('Tratamento:f6', 'Medico:f0', label='responsável')

# Especializações
er.edge('Tratamento:f0', 'Tratamento_Cirurgico:f0', label='é um')
er.edge('Tratamento:f0', 'Tratamento_Nao_Cirurgico:f0', label='é um')

# Renderiza o diagrama
er.render('diagrama_er_tratamento', format='png', cleanup=True)